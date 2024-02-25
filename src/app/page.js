import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HomeMenu />
            <section className="text-center my-16">
                <SectionHeaders
                    subHeader={'Our story'}
                    mainHeader={'About us'}
                />
                <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi aliquam dolorum doloribus. Perspiciatis
                        doloremque quod molestiae unde quasi illum rerum est,
                        tempore quam adipisci veniam eos quos distinctio omnis
                        nesciunt?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ea sapiente eveniet adipisci ab, aperiam
                        distinctio debitis exercitationem iusto consectetur
                        explicabo recusandae facere repellat quod. Aliquam qui
                        quas omnis ipsam aut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto nulla sint saepe porro facere ducimus
                        voluptatum delectus
                    </p>
                </div>
            </section>
            <section className="text-center my-8">
                <SectionHeaders
                    subHeader={"Don't hesitate"}
                    mainHeader={'Contact us'}
                />
                <div className="mt-8">
                    <a href="tel:+919633710563" className="text-4xl underline text-gray-500">
                        +91 9633710563
                    </a>
                </div>
            </section>
            <footer className='border-t p-8 text-center mt-16 text-gray-500'>
                &copy; 2024 All rights reserved
            </footer>
        </>
    );
}
