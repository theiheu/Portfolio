import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles={"flex gap-x-6 mx-auto xl:mx-0 mb-4"}
            iconsStyles={
              "text-primary text-[20px] hover:text-white dark:hover:text-primary transition-all"
            }
          />
          {/* coppy right */}
          <div className="text-muted-foreground">
            Copyright &copy; The Hieu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
