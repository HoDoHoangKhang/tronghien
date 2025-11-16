# Hướng dẫn Deploy lên Vercel

Có 2 cách để deploy dự án Next.js này lên Vercel:

## Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị - Dễ nhất)

### Bước 1: Đăng nhập Vercel
1. Truy cập https://vercel.com
2. Đăng nhập bằng GitHub account (nên dùng cùng account với repo)

### Bước 2: Import Project
1. Click vào **"Add New..."** → **"Project"**
2. Chọn repository `HoDoHoangKhang/tronghien` từ danh sách
3. Vercel sẽ tự động detect đây là Next.js project

### Bước 3: Cấu hình Build Settings
Vercel sẽ tự động detect các settings sau:
- **Framework Preset**: Next.js
- **Build Command**: `pnpm build` (hoặc `npm run build`)
- **Output Directory**: `.next`
- **Install Command**: `pnpm install` (hoặc `npm install`)

**Lưu ý**: Nếu dùng pnpm, đảm bảo chọn **Package Manager** là `pnpm`

### Bước 4: Environment Variables (nếu có)
Nếu dự án cần biến môi trường, thêm vào phần **Environment Variables**

### Bước 5: Deploy
1. Click **"Deploy"**
2. Chờ quá trình build và deploy hoàn tất (thường 2-5 phút)
3. Sau khi deploy xong, bạn sẽ nhận được URL như: `https://tronghien.vercel.app`

### Bước 6: Tự động Deploy
- Mỗi khi push code lên branch `main`, Vercel sẽ tự động deploy lại
- Có thể xem preview cho mỗi Pull Request

---

## Cách 2: Deploy qua Vercel CLI

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
# hoặc
pnpm add -g vercel
```

### Bước 2: Đăng nhập
```bash
vercel login
```

### Bước 3: Deploy
```bash
vercel
```

Lần đầu tiên, Vercel sẽ hỏi:
- **Set up and deploy?** → Chọn `Y`
- **Which scope?** → Chọn account của bạn
- **Link to existing project?** → Chọn `N` (tạo project mới)
- **What's your project's name?** → Nhập tên project (hoặc Enter để dùng tên mặc định)
- **In which directory is your code located?** → Enter (dùng thư mục hiện tại)

### Bước 4: Production Deploy
Sau khi deploy preview thành công, deploy lên production:
```bash
vercel --prod
```

---

## Lưu ý quan trọng

### 1. Font UTM-Times
Nếu bạn cần sử dụng font `UTM-Times.ttf`:
- Thêm file font vào thư mục `public/fonts/UTM-Times.ttf`
- Uncomment code trong `app/layout.tsx` (dòng 12-15)

### 2. Environment Variables
Nếu cần thêm biến môi trường:
- Vào Vercel Dashboard → Project Settings → Environment Variables
- Thêm các biến cần thiết

### 3. Custom Domain
Để thêm custom domain:
- Vào Vercel Dashboard → Project Settings → Domains
- Thêm domain của bạn

### 4. Build Settings
Dự án đã được cấu hình sẵn:
- ✅ Next.js 16.0.0
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Vercel Analytics (đã có sẵn trong code)

---

## Troubleshooting

### Lỗi Build
- Kiểm tra logs trong Vercel Dashboard
- Đảm bảo `pnpm install` chạy thành công
- Kiểm tra xem có file font nào thiếu không

### Lỗi Font
- Nếu font UTM-Times không có, comment lại phần import font trong `app/layout.tsx`

### Lỗi Image
- Dự án đã có `images: { unoptimized: true }` trong `next.config.mjs` để tương thích với Vercel

---

## Sau khi Deploy

1. **URL Production**: Sẽ có dạng `https://tronghien.vercel.app`
2. **Auto Deploy**: Mỗi push lên `main` sẽ tự động deploy
3. **Preview Deployments**: Mỗi PR sẽ có preview URL riêng
4. **Analytics**: Vercel Analytics đã được tích hợp sẵn trong code

Chúc bạn deploy thành công! 🚀

