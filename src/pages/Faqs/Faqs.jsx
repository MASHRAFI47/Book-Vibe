
const Faqs = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-full mt-20 md:mt-0">
                <h1 className="text-3xl mb-3 mt-5 font-bold font-playfair text-center">Still Got Questions?</h1>
                <div className="collapse collapse-arrow bg-base-200 mb-4 mt-6">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What are your store hours?
                    </div>
                    <div className="collapse-content">
                        <p>Our bookstore is open from 8:00 to 20:00 every day of the week. We also have extended hours during holidays and special events. Please check our Contact Us page for more details.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on the destination. For more information, please visit our Shipping page.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I return or exchange a book?
                    </div>
                    <div className="collapse-content">
                        <p>We accept returns or exchanges within 30 days of purchase, provided the book is in its original condition. Please refer to our Return Policy for detailed instructions on how to initiate a return or exchange.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer gift wrapping services?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer complimentary gift wrapping services for books purchased in-store or online. Simply select the gift wrapping option at checkout, and our team will ensure your purchase is beautifully wrapped and ready for gifting.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I reserve a book online and pick it up in-store?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! We offer an in-store pickup option for online orders. Simply select the Pickup In-Store option at checkout, and we will notify you once your order is ready for collection.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faqs