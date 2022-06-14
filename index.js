const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const allProjets = await prisma.portfolio_tags.findMany()
    console.log(allProjets);
  }

  main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })