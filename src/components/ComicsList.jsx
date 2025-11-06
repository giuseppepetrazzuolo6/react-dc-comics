import Card from "./Card";

export default function ComicsList({ comics }) {

    return (

        <section className='main-top bg-dark py-5'>
            <div className="container">
                <div className="row g-4">
                    {
                        comics.map((comic) => (
                            <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
                        ))
                    }
                </div>
                <div className="text-center">
                    <button className="btn btn-primary rounded-0">LOAD MORE</button>
                </div>
            </div>
        </section>

    );

}