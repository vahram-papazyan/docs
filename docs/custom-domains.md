---
id: custom-domains
title: Use a Custom Domain
sidebar_label: Use a Custom Domain
---

Your backend endpoints are always available at `<your_canvas_name>.builtwithdark.com/*`.

If you'd like, you can additionally use a custom domain like `www.myawesomedarkservice.com` or `api.myawesomedarkservice.com` to serve your endpoints!

We'll manage SSL for you - no need to buy your own certificate to make your site or service available over `https`.

## How to set it up

1. Set up a `CNAME` record that points from your desired domain to `<your_canvas_name>.darkcustomdomain.com`.
   For example, if your canvas is called `ellen-demo`, point your `CNAME` at `ellen-demo.darkcustomdomain.com`.
   The specifics for this step depends on how you manage your DNS settings, but here's what it might look like on Cloudflare:

   ![Setting a CNAME on Cloudflare](assets/customdomain/cname-example.png)

   **Note**: You _cannot_ use an apex domain like `myawesomedarkservice.com`. Using `www.myawesomedarkservice.com` is the usual
   way, although you can use `app`, `api`, or another subdomain instead of `www`.
   This is because apex `CNAME`s aren't supported by the DNS spec, and `A` records remove some of our
   options for providing stable and resilient infrastructure.
   You can read [this Netlify post](https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/) for more information.

   If you wish, you can additionally set up an `A` record pointing the apex (eg `myawesomedarkservice.com`) to
   `35.227.208.117`. We cannot currently provide an SSL cert for that, but we can
   redirect to your main subdomain (which is usually `www`). If your DNS provider supports
   `ALIAS` records (like `CNAME`, but permitted on an apex), that also works - though
   again, for redirects, not SSL certs.

2. Double-check that DNS has resolved. One way to test this is with the `dig` tool on the commandline. If everything is ready, you should see something like this:

   ```shell
    $dig api.myawesomedarkservice.com
    # ...
    ;; ANSWER SECTION:
    api.myawesomedarkservice.com.    300    IN    CNAME    ellen-demo.darkcustomdomain.com.
    ellen-demo.darkcustomdomain.com. 300 IN A 35.197.124.122
    # ...
   ```

   Another way to check is with a service like [https://dnschecker.org/](https://dnschecker.org/).

3. Once DNS resolves, [contact us](support) with your domain and canvas, and we'll set things up on our end.

## Troubleshooting

### I've set up a CNAME but I still don't see `<your_canvas_name>.darkcustomdomain.com` in the results from `dig`!

We've seen this happen for devs using proxies like Cloudflare in front of their domains. For example, you might see:

```shell
$ dig api.myawesomedarkservice.com
# ...
;; ANSWER SECTION:
api.myawesomedarkservice.com.    300    IN    A    104.24.118.127
api.myawesomedarkservice.com.    300    IN    A    104.24.119.127
# ...
```

To resolve this, turn off the proxy. On Cloudflare, you can press this button to switch from "Proxied" to "DNS only" mode:
![Turning off the Cloudflare proxy in favor of "DNS only"](assets/customdomain/cloudflare-proxy.png)