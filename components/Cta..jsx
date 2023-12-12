import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dolor?
                    </h2>
                    <Link href={'/contact'}>
                        <Button>Contact me</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta