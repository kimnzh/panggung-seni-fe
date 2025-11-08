import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-light-black px-20 py-5">
      <div className="flex text-b5 gap-2 items-center">
        <div className="relative h-16 w-16">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        PanggungSeni.id
      </div>
    </footer>
  );
};

export default Footer;
