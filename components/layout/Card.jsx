import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ posts, loading }) => {
  return (
    <>
      {posts.map((post) => {
        const { name, flags, population, capital, region } = post;
        return (
          <Link
            key={name?.common}
            href="/country/[name]"
            as={`/country/${name?.common}`}
          >
            <div className="card">
              <div className="card__img">
                <Image
                  height={150}
                  width={270}
                  src={flags?.png}
                  alt={flags?.svg}
                  className="img"
                />
              </div>

              <div className="card__content">
                <h3>{name?.official}</h3>
                <p>Population: {population}</p>
                <p> Region: {region}</p>
                <p>Capital: {capital}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
