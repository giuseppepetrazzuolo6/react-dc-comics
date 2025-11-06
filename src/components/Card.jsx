export default function Card({ thumb, series }) {

    return (
        <div className="col-2">
            <div className="card bg-transparent border-0">
                <div className="card-img-top rounded-0">
                    <img className="img-comics" src={thumb} alt="" />
                </div>
                <div className="card-body">
                    <h6 className="text-white">{series}</h6>
                </div>
            </div>
        </div>

    )
}