import Image from "next/image";
import React from "react";

const Delicacies = () => {
  return (
    <section className="banner-gradient p-24">
      <div className="w-full max-w-screen-md flex-between lg:flex-center flex-col lg:flex-row flex-wrap gap-4 mx-auto space-y-6 lg:space-y-0">
        <article className="features-card group hover:bg-secondary-300 transition-all">
          <div className="w-[105px] h-[109px] flex-between flex-col gap-3 pr-2">
            <h1 className="text-sm font-bold uppercase group-hover:text-primary-100 transition-all">
              refuel<span className="text-xl block leading-2">package</span>
            </h1>
            <p className="text-[10px] font-bold uppercase leading-3 group-hover:text-primary-100 transition-all">
              all new spicey one time refuel meal package
            </p>

            <p className="text-[11px] font-normal text-secondary-300 text-left w-full group-hover:text-highlight-100 transition-all">
              N3,200
            </p>
          </div>
          <div className="size-20 rounded-full bg-highlight-100">
            <Image
              src="/assets/food-pack.png"
              alt="food pack"
              width={94}
              height={72}
              className="-ml-2"
            />
          </div>
        </article>

        <article className="features-card group hover:bg-secondary-300 transition-all">
          <div className="w-[105px] h-[109px] flex-between flex-col gap-3 pr-2">
            <h1 className="text-sm font-bold uppercase group-hover:text-primary-100 transition-all">
              special chef
              <span className="text-xl block leading-2">delicacies</span>
            </h1>
            <p className="text-[10px] font-bold uppercase leading-3 group-hover:text-primary-100 transition-all">
              enjoy special chef's yummy delicacy
            </p>

            <p className="text-[11px] font-normal text-secondary-300 text-left w-full group-hover:text-highlight-100 transition-all">
              N5,200
            </p>
          </div>
          <div className="size-20 rounded-full bg-highlight-100">
            <Image
              src="/assets/food-pack.png"
              alt="food pack"
              width={94}
              height={72}
              className="-ml-2"
            />
          </div>
        </article>

        <article className="features-card group hover:bg-secondary-300 transition-all">
          <div className="w-[105px] h-[109px] flex-between flex-col gap-3 pr-2">
            <h1 className="text-sm font-bold uppercase group-hover:text-primary-100 transition-all">
              health check
              <span className="text-xl block leading-2">package</span>
            </h1>
            <p className="text-[10px] font-bold uppercase leading-3 group-hover:text-primary-100 transition-all">
              food made to keep your health in check
            </p>

            <p className="text-[11px] font-normal text-secondary-300 text-left w-full group-hover:text-highlight-100 transition-all">
              N4,200
            </p>
          </div>
          <div className="size-20 rounded-full bg-highlight-100">
            <Image
              src="/assets/food-pack.png"
              alt="food pack"
              width={94}
              height={72}
              className="-ml-2"
            />
          </div>
        </article>

        <article className="features-card group hover:bg-secondary-300 transition-all">
          <div className="h-[109px] flex-center flex-col gap-3 pr-2">
            <h1 className="text-sm font-bold uppercase group-hover:text-primary-100 transition-all">
              chefpot's
              <span className="text-xl block leading-4">discount weekend</span>
            </h1>

            <p className="p-1 text-[11px] text-center font-normal bg-secondary-300 group-hover:bg-highlight-100 group-hover:text-highlight-300 w-32 rounded-full transition-all text-primary-100 text-pretty">
              20% disc. weekly for lucky winners
            </p>
          </div>
          <div className="size-20 shrink-0 rounded-full bg-highlight-100">
            <Image
              src="/assets/food-pack.png"
              alt="food pack"
              width={94}
              height={72}
              className="-ml-2"
            />
          </div>
        </article>

        <article className="features-card group hover:bg-secondary-300 transition-all">
          <div className="h-[109px] flex-center flex-col gap-3 pr-2">
            <h1 className="text-xl font-bold uppercase group-hover:text-primary-100 transition-all">
              locator
              <span className="text-sm block leading-3 lg:leading-2">
                faster than you think
              </span>
            </h1>

            <p className="p-1 text-[11px] text-center font-normal bg-secondary-300 w-full group-hover:bg-highlight-100 group-hover:text-highlight-300 rounded-full transition-all text-primary-100 text-pretty">
              20% disc. weekly for lucky winners
            </p>
          </div>
          <div className="size-20 shrink-0 rounded-full bg-highlight-100 flex-center">
            <Image
              src="/assets/locate.png"
              alt="food pack"
              width={94}
              height={72}
              className="object-contain -mt-4"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Delicacies;
