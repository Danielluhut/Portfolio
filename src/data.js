import HeroImage from "/assets/Hero-img2.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/Emotor.jpg";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Indonesia AI In Box",
    desk: "Indonesia AI In The Box merupakan platform web yang digunakan untuk mengelola container, layanan, dan sumber daya sistem berbasis kecerdasan buatan (AI). Website ini menyediakan antarmuka yang interaktif untuk membantu admin, pengguna, dan tim maintenance dalam melakukan pengelolaan service secara terpusat — seperti menyalakan atau mematikan container, memantau penggunaan resource, dan melihat log aktivitas sistem secara real-time.",
    tools: ["PHP", "JSON", "Javascript", "ReactJS", "CSS Tailwind"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "E-Motorcycle",
    desk: "E-Motor adalah sebuah website penyewaan sepeda motor yang dirancang untuk memudahkan pengguna dalam mencari, memilih, dan memesan motor secara online. Platform ini menghadirkan tampilan modern dan responsif sehingga pengalaman pengguna terasa nyaman, baik melalui komputer maupun perangkat mobile. Di dalamnya tersedia daftar motor lengkap dengan harga, foto, dan spesifikasi sehingga pengguna dapat mengetahui detail sebelum melakukan pemesanan. Sistem login dan dashboard admin memungkinkan pengelola rental untuk mengatur data motor, mengelola transaksi, memantau penyewaan, serta melihat ringkasan aktivitas penyewaan secara real-time. Dengan dukungan keamanan seperti hashing password dan validasi form, E-Motor hadir sebagai solusi digital yang membantu proses penyewaan menjadi lebih efisien, aman, dan praktis tanpa harus datang langsung ke lokasi rental.",
    tools: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "TailwindCSS", "HTML", "CSS" ,"AOS"],
    dad: "300",
    link: "http://192.168.100.252/e_motor"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
];
