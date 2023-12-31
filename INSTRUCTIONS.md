# Environment setup

npx create-next-app@latest . --eslint --tailwind --typescript

Ok to proceed? (y) y
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias? ... No

npx shadcn-ui@latest init

D:\dev\ai-discord>npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Stone
√ Where is your global CSS file? ... app/globals.css
√ Would you like to use CSS variables for colors? ... yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes

npx shadcn-ui@latest add -y button

# Authentication

Clerk setup: 
https://clerk.com/ - login - add new application
name: antonio-discord-clone - create - copy env to .env

.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

npm i @clerk/nextjs

# Dark & Light Theme setup

npm i next-themes

npx shadcn-ui@latest add -y dropdown-menu

# Prisma & Planetscale setup

npm i -D prisma
npx prisma init

<setup mysql - planetscale or aiven>
<prisma models>

npx prisma generate
npx prisma db push

npm i @prisma/client

# Initial modal UI

npx shadcn-ui@latest add -y dialog
npx shadcn-ui@latest add -y input
npx shadcn-ui@latest add -y form

# UploadThing setup

https://uploadthing.com/ 
Create: - name: antonio-discord - url: <EMPTY> - create App
API Keys: copy env keys to .env
Overview: Get started - 
* install the packages - `npm i uploadthing @uploadthing/react react-dropzone`
* setup App nextjs: files in commit
Files: validate files are uploaded

# Server Creation API

npm i axios
npm i uuid
npm i -D @types/uuid

# Navigation sidebar

npx shadcn-ui@latest add -y tooltip
npx shadcn-ui@latest add -y separator
npx shadcn-ui@latest add -y scroll-area

# Create Server modal

npm i zustand

# Manage members

npx shadcn-ui@latest add -y avatar      
npm i query-string

# Channel creation

npx shadcn-ui@latest add -y select

# Search Server modal

npx shadcn-ui@latest add -y command

# Chat header

npx shadcn-ui@latest add -y sheet

# Prisma schema completion

npx prisma generate
npx prisma db push

# Socket IO setup

npm i socket.io
npm i socket.io-client
npx shadcn-ui@latest add -y badge 

# Messages API

* create message
npx prisma studio

# Emoji bar

npx shadcn-ui@latest add -y popover
npm i emoji-mart @emoji-mart/data @emoji-mart/react

# Chat Messages component

npm i @tanstack/react-query

# Chat Item component

npm i date-fns

# Video Calls

LiveKit setup:
https://livekit.io/ - 

NEXT_PUBLIC_LIVEKIT_URL - copy WebSocket URL
LIVEKIT_API_SECRET, LIVEKIT_API_KEY - Settings - Add new key - generate

.env
LIVEKIT_API_KEY=APILTKzrGCipZ4D
LIVEKIT_API_SECRET=wSTkqwE4DAd8alYyAGWwOj1M2HrCn0ueGmfmbmjbdps
NEXT_PUBLIC_LIVEKIT_URL=wss://antonio-discord-3b3kec9h.livekit.cloud

click documentation - next13 - copy npm 
npm install livekit-server-sdk livekit-client @livekit/components-react @livekit/components-styles --save
