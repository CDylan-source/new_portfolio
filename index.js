// https://drive.google.com/uc?export=view&id=
// https://drive.google.com/file/d/1V-g0J2IsVKc40iJUP2eWW1rQHsueKr17/view?usp=sharing
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient;

async function updateIm(){
    await prisma.portfolio_projets.update({
        where: {
            idprojet: 1
        },
        data: {
            image: "https://drive.google.com/uc?export=view&id=1V-g0J2IsVKc40iJUP2eWW1rQHsueKr17"
        },
    })
}
updateIm()