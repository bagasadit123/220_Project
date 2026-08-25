  require('dotenv').config();
  const { sequelize, CampusVehicle } = require('../models');

  const data = [
    // ===== MOTOR - BENSIN =====
    { kategori: 'Motor', tipe_kendaraan: 'Honda Beat', kapasitas_cc: 110, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 55.0, emisi_co2_per_km: 45.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda Vario 125', kapasitas_cc: 125, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 48.5, emisi_co2_per_km: 50.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda PCX 160', kapasitas_cc: 160, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 42.0, emisi_co2_per_km: 56.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda ADV160', kapasitas_cc: 160, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 40.5, emisi_co2_per_km: 57.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda Supra X125', kapasitas_cc: 125, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 52.0, emisi_co2_per_km: 47.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda CBR150R', kapasitas_cc: 150, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 35.0, emisi_co2_per_km: 62.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha Mio', kapasitas_cc: 125, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 50.0, emisi_co2_per_km: 48.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha NMAX', kapasitas_cc: 155, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 41.5, emisi_co2_per_km: 56.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha Aerox', kapasitas_cc: 155, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 40.0, emisi_co2_per_km: 58.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha Xmax', kapasitas_cc: 250, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 33.0, emisi_co2_per_km: 68.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha Fazzio', kapasitas_cc: 125, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 51.0, emisi_co2_per_km: 47.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Suzuki Address', kapasitas_cc: 113, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 53.0, emisi_co2_per_km: 46.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Suzuki GSX-R150', kapasitas_cc: 150, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 34.5, emisi_co2_per_km: 63.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Kawasaki Ninja 250', kapasitas_cc: 250, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 28.0, emisi_co2_per_km: 75.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Vespa Primavera', kapasitas_cc: 150, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 36.0, emisi_co2_per_km: 60.0 },

    // ===== MOTOR - LISTRIK =====
    { kategori: 'Motor', tipe_kendaraan: 'Gesits G1', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 65.0, emisi_co2_per_km: 18.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Selis E-Max', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 60.0, emisi_co2_per_km: 19.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Viar Q1', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 58.0, emisi_co2_per_km: 20.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Yadea T9', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 62.0, emisi_co2_per_km: 18.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Alva Cervo', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 63.5, emisi_co2_per_km: 17.5 },

    // ===== MOBIL - BENSIN =====
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Avanza', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 14.0, emisi_co2_per_km: 145.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Agya', kapasitas_cc: 1200, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 18.5, emisi_co2_per_km: 118.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Rush', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 13.0, emisi_co2_per_km: 152.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Fortuner', kapasitas_cc: 2700, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 8.5, emisi_co2_per_km: 210.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Honda Brio', kapasitas_cc: 1200, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 19.0, emisi_co2_per_km: 112.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Honda CR-V', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 13.5, emisi_co2_per_km: 150.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Honda HR-V', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.5, emisi_co2_per_km: 138.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Daihatsu Xenia', kapasitas_cc: 1300, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.0, emisi_co2_per_km: 140.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Daihatsu Ayla', kapasitas_cc: 1000, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 20.5, emisi_co2_per_km: 105.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Suzuki Ertiga', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 14.5, emisi_co2_per_km: 142.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Suzuki Baleno', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 16.5, emisi_co2_per_km: 130.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Mitsubishi Xpander', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 13.8, emisi_co2_per_km: 148.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Nissan Livina', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 14.2, emisi_co2_per_km: 146.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Mazda CX-5', kapasitas_cc: 2000, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 11.0, emisi_co2_per_km: 178.0 },

    // ===== MOBIL - DIESEL =====
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Hilux', kapasitas_cc: 2400, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 12.5, emisi_co2_per_km: 195.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Innova Diesel', kapasitas_cc: 2400, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 13.0, emisi_co2_per_km: 188.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Mitsubishi Pajero Sport', kapasitas_cc: 2400, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 11.5, emisi_co2_per_km: 205.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Isuzu Panther', kapasitas_cc: 2500, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 14.5, emisi_co2_per_km: 175.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Ford Ranger', kapasitas_cc: 2200, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 12.0, emisi_co2_per_km: 198.0 },

    // ===== MOBIL - HYBRID =====
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Corolla Cross Hybrid', kapasitas_cc: 1800, bahan_bakar: 'Hybrid', efisiensi_km_per_liter: 24.0, emisi_co2_per_km: 88.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Innova Zenix Hybrid', kapasitas_cc: 1800, bahan_bakar: 'Hybrid', efisiensi_km_per_liter: 21.0, emisi_co2_per_km: 96.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Honda CR-V Hybrid', kapasitas_cc: 2000, bahan_bakar: 'Hybrid', efisiensi_km_per_liter: 19.5, emisi_co2_per_km: 102.0 },

    // ===== MOBIL - LISTRIK =====
    { kategori: 'Mobil', tipe_kendaraan: 'Wuling Air EV', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 7.8, emisi_co2_per_km: 22.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Hyundai Ioniq 5', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 6.2, emisi_co2_per_km: 26.5 },
    { kategori: 'Mobil', tipe_kendaraan: 'BYD Atto 3', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 6.5, emisi_co2_per_km: 25.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota bZ4X', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 6.0, emisi_co2_per_km: 27.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'MG4 EV', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 6.8, emisi_co2_per_km: 24.0 },

    // ===== BUS =====
    { kategori: 'Bus', tipe_kendaraan: 'Bus Kampus AC 30 Seat', kapasitas_cc: 7500, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 4.5, emisi_co2_per_km: 620.0 },
    { kategori: 'Bus', tipe_kendaraan: 'Bus Kampus Non-AC 25 Seat', kapasitas_cc: 6500, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 5.2, emisi_co2_per_km: 560.0 },
    { kategori: 'Bus', tipe_kendaraan: 'Bus Mini Kampus 15 Seat', kapasitas_cc: 3900, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 7.0, emisi_co2_per_km: 410.0 },
    { kategori: 'Bus', tipe_kendaraan: 'Bus Listrik Kampus 30 Seat', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 1.8, emisi_co2_per_km: 180.0 },
    { kategori: 'Bus', tipe_kendaraan: 'Bus Shuttle Antar Gedung', kapasitas_cc: 2800, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 8.5, emisi_co2_per_km: 340.0 },

    // ===== TRUK / OPERASIONAL =====
    { kategori: 'Truk', tipe_kendaraan: 'Truk Sampah Kampus', kapasitas_cc: 5200, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 5.5, emisi_co2_per_km: 480.0 },
    { kategori: 'Truk', tipe_kendaraan: 'Truk Pickup Operasional', kapasitas_cc: 2500, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 10.5, emisi_co2_per_km: 225.0 },
    { kategori: 'Truk', tipe_kendaraan: 'Truk Box Logistik Kampus', kapasitas_cc: 3000, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 8.0, emisi_co2_per_km: 300.0 },
    { kategori: 'Truk', tipe_kendaraan: 'Truk Tangki Air Kampus', kapasitas_cc: 4200, bahan_bakar: 'Diesel', efisiensi_km_per_liter: 6.5, emisi_co2_per_km: 395.0 },

    // ===== SEPEDA & SKUTER LISTRIK =====
    { kategori: 'Sepeda Listrik', tipe_kendaraan: 'Exotic E-Bike Kampus', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 120.0, emisi_co2_per_km: 8.0 },
    { kategori: 'Sepeda Listrik', tipe_kendaraan: 'Pacific E-Bike City', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 110.0, emisi_co2_per_km: 8.5 },
    { kategori: 'Skuter Listrik', tipe_kendaraan: 'Xiaomi Mi Electric Scooter', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 85.0, emisi_co2_per_km: 10.5 },
    { kategori: 'Skuter Listrik', tipe_kendaraan: 'Segway Ninebot Max', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 90.0, emisi_co2_per_km: 10.0 },
    { kategori: 'Skuter Listrik', tipe_kendaraan: 'Beam Saturn Kampus', kapasitas_cc: 0, bahan_bakar: 'Listrik', efisiensi_km_per_liter: 88.0, emisi_co2_per_km: 10.2 },

    // ===== TAMBAHAN VARIASI MOTOR & MOBIL =====
    { kategori: 'Motor', tipe_kendaraan: 'Honda Scoopy', kapasitas_cc: 110, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 54.0, emisi_co2_per_km: 45.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Yamaha Lexi', kapasitas_cc: 125, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 49.0, emisi_co2_per_km: 48.5 },
    { kategori: 'Motor', tipe_kendaraan: 'Honda Genio', kapasitas_cc: 110, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 53.5, emisi_co2_per_km: 46.0 },
    { kategori: 'Motor', tipe_kendaraan: 'Suzuki Nex II', kapasitas_cc: 113, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 52.5, emisi_co2_per_km: 46.5 },
    { kategori: 'Mobil', tipe_kendaraan: 'Toyota Calya', kapasitas_cc: 1200, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 18.0, emisi_co2_per_km: 120.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Honda Mobilio', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.8, emisi_co2_per_km: 136.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Wuling Confero', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 14.8, emisi_co2_per_km: 143.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Chery Omoda 5', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.2, emisi_co2_per_km: 139.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Hyundai Creta', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.6, emisi_co2_per_km: 137.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Kia Seltos', kapasitas_cc: 1500, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 15.0, emisi_co2_per_km: 141.0 },
    { kategori: 'Mobil', tipe_kendaraan: 'Nissan Magnite', kapasitas_cc: 1000, bahan_bakar: 'Bensin', efisiensi_km_per_liter: 19.8, emisi_co2_per_km: 108.0 }
  ];

  async function run() {
    try {
      await sequelize.authenticate();
      console.log(`Terhubung ke database. Menyiapkan ${data.length} data kendaraan...`);

      await CampusVehicle.destroy({ where: {}, truncate: true, restartIdentity: true, cascade: false });

      await CampusVehicle.bulkCreate(data);

      console.log(`Berhasil! ${data.length} data kendaraan sudah masuk ke tabel campus_vehicles.`);
      process.exit(0);
    } catch (error) {
      console.error('Gagal seeding:', error.message);
      process.exit(1);
    }
  }

  run();