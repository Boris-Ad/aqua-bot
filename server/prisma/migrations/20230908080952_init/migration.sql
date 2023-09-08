-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "teleg_id" INTEGER NOT NULL,
    "avatar" TEXT,
    "name" TEXT,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "src" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "bottleSize" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "src" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bottle" (
    "size" INTEGER NOT NULL,
    "src" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "bottle_5" INTEGER NOT NULL,
    "bottle_10" INTEGER NOT NULL,
    "bottle_20" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "daily" BOOLEAN NOT NULL DEFAULT false,
    "daily_data" TEXT NOT NULL DEFAULT '',
    "daily_week" BOOLEAN NOT NULL DEFAULT true,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "categoryName" TEXT NOT NULL,
    "saleName" TEXT,
    "userTelegId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_login_key" ON "Admin"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_teleg_id_key" ON "User"("teleg_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bottle_size_key" ON "Bottle"("size");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_name_key" ON "Sale"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bottleSize_fkey" FOREIGN KEY ("bottleSize") REFERENCES "Bottle"("size") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userTelegId_fkey" FOREIGN KEY ("userTelegId") REFERENCES "User"("teleg_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_saleName_fkey" FOREIGN KEY ("saleName") REFERENCES "Sale"("name") ON DELETE SET NULL ON UPDATE CASCADE;
