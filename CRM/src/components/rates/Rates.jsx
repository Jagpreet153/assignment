import React from 'react'

const Rates= () => {

    return(
        <div>
            <h1 className="text-4xl font-bold text-center">Total Conversion Rates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Daily Rates</h2>
                        <p>View daily conversion rate</p>
                        <a href="/rates/daily" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Weekly Rates</h2>
                        <p>View weekly conversion rate</p>
                        <a href="/rates/weekly" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Monthly Rates</h2>
                        <p>View monthly conversion rate</p>
                        <a href="/rates/monthly" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rates