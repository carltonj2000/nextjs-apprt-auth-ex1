# Next JS App Router With Next Auth

Start via `pnpm dev`.
View providers at `http://localhost:3000/api/auth/providers`.

## GitHub OAuth Setup

GitHub oauth app registered in:
`github->settings->developer settings->oauth apps->reg new app`
with homepage url
`http://localhost:3000`
and authorized callback url
`http://localhost:3000/api/auth/callback/github`

Note you need one oauth for dev and one for prod.

## Creation History

The code in this repository is based on the
[Next-Auth on App Router - Solid Auth, Super Fast](https://youtu.be/md65iBX5Gxg?si=adoVTbHdN290OkRK)
video.

## Code History

```bash
pnpm dlx create-next-app@latest --use-pnpm
cd nextjs-apprt-auth-ex1/
pnpm add next-auth
openssl rand -base64 32
```
