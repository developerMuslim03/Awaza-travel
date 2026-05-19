import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seed prosesi başlady...");

  await prisma.room.deleteMany();
  await prisma.hotel.deleteMany();

  const hotelsData = [
    {
      name: "Ýyldyz Myhmanhanasy",
      description:
        "Aşgabadyň iň belent nokadynda ýerleşýän, bäş ýyldyzly kaşaň myhmanhana.",
      location: "Aşgabat",
      address: "Bagtyýarlyk şaýoly, 17",
      pricePernight: 1200,
      rating: 4.9,
      photos: ["yildyz1.jpg", "yildyz2.jpg"],
    },
    {
      name: "Nebitçi Myhmanhanasy",
      description:
        "Hazar deňziniň kenarynda, Awaza syýahatçylyk zolagynda ýerleşýär.",
      location: "Awaza",
      address: "Deňiz kenar köçesi, 5",
      pricePernight: 800,
      rating: 4.5,
      photos: ["nebitchi1.jpg", "nebitchi2.jpg"],
    },
    {
      name: "Mary Myhmanhanasy",
      description:
        "Mary şäheriniň merkezinde, taryhy ýerlere golaý amatly dynç alyş.",
      location: "Mary",
      address: "Gurbansoltan eje köçesi, 24",
      pricePernight: 500,
      rating: 4.2,
      photos: ["mary1.jpg", "mary2.jpg"],
    },
    {
      name: "Daşoguz Myhmanhanasy",
      description:
        "Demirgazyk welaýatymyzyň iň döwrebap myhmanhanalarynyň biri.",
      location: "Daşoguz",
      address: "Al-Horezmî köçesi, 10",
      pricePernight: 450,
      rating: 4.0,
      photos: ["dashoguz1.jpg"],
    },
    {
      name: "Lebap Myhmanhanasy",
      description:
        "Türkmenabat şäherinde, Amyderýanyň kenaryna golaý ýerde ýerleşýär.",
      location: "Türkmenabat",
      address: "Bitarap Türkmenistan şaýoly, 102",
      pricePernight: 550,
      rating: 4.3,
      photos: ["lebap1.jpg"],
    },
    {
      name: "Köpetdag Myhmanhanasy",
      description:
        "Köpetdagyň eteginde, Arçman şypahanasynyň golaýynda tebigy dynç alyş.",
      location: "Baharly",
      address: "Arçman ýoly, km 15",
      pricePernight: 400,
      rating: 4.7,
      photos: ["archman1.jpg"],
    },
  ];

  const roomTypes = ["Standart", "Lýuks", "Maşgala", "VIP"];

  const allAmenities = [
    "Wi-Fi",
    "Kondisioner",
    "Telewizor",
    "Minibar",
    "Ertirlik",
    "Baseýn",
  ];

  for (const hotelData of hotelsData) {
    const hotel = await prisma.hotel.create({
      data: hotelData,
    });

    console.log(`${hotel.name} döredildi.`);

    for (let i = 1; i <= 5; i++) {
      await prisma.room.create({
        data: {
          hotelId: hotel.id,
          type: roomTypes[Math.floor(Math.random() * roomTypes.length)],
          price: hotel.pricePernight + i * 50,
          amenities: allAmenities.slice(
            0,
            Math.floor(Math.random() * 4) + 2
          ),
          photos: [`room_${i}.jpg`],
          isAvailable: true,
        },
      });
    }
  }

  console.log("\n 6 sany myhmanhana we 30 sany otag üstünlikli goşuldy.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seed hatasy:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
