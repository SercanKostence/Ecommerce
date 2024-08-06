import React, { Component, Fragment } from 'react';

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid mx-auto text-center px-2 py-4 mt-16 bg-gray-">
                    <div className="section-title text-center mb-14">
                        <h2 className="text-3xl font-bold">PRODUCT COLLECTION</h2>
                        <p className="text-lg mt-2">Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
                            "Striped Men Hooded Neck Red",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50",
                            "Striped Men Round Neck Grey",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50",
                            "Color Block Men Round Neck Grey",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/kfmv9u80/t-shirt/t/f/p/l-bmrnvhenful-z14-blive-original-imafwfqkyfr3zxdr.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/d/2/e/l-bnvgyrnful-z12-blive-original-imafvgzk3mh2vpmt.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/kdnf98w0hlty2aw-0/t-shirt/r/5/v/l-tgy-rbvnd01ganesh-tripr-original-imafuzrq6hpafsmb.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/jwxuvm80/t-shirt/c/n/g/s-1jgrfdotstpwh-nvy-jugular-original-imafhhajsn6yzg2a.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/jwxuvm80/t-shirt/c/n/g/s-1jgrfdotstpwh-nvy-jugular-original-imafhhajsn6yzg2a.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                        {this.renderCard(
                            "https://rukminim1.flixcart.com/image/800/960/jwxuvm80/t-shirt/c/n/g/s-1jgrfdotstpwh-nvy-jugular-original-imafhhajsn6yzg2a.jpeg?q=50",
                            "Printed Men Hooded Neck Red T-Shirt",
                            "$120"
                        )}
                    </div>
                </div>
            </Fragment>
        );
    }

    renderCard(imageSrc, productName, price, priceClass = "text-gray-900 font-semibold") {
        return (
            <div className="col-span-1 p-2">
                <div className="bg-white shadow-xl rounded-lg border-1 border-gray-300 transition-transform duration-300 hover:scale-105 overflow-hidden">
                    <div className="w-full h-64 flex items-center justify-center">
                        <img className="w-full h-full object-contain mt-8" src={imageSrc} alt={productName} />
                    </div>
                    <div className="p-4">
                        <p className="text-md font-semibold">{productName}</p>
                        <p className={priceClass}>Price : {price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collection;
