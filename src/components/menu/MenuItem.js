import React from 'react';

export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
            <div className="text-center">
                <img
                    src="/pizza.png"
                    alt="pizza"
                    className="max-h-auto max-h-24 block mx-auto"
                />
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                ex, possimus assumenda accusamus laudantium, dolorem quos aut
                illo debitis harum sed dolor esse illum.
            </p>
            <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
                Add to cart $12
            </button>
        </div>
    );
}
