import React from 'react'

const Sales= () => {

    return(
        <div>
            <h1 className="text-4xl font-bold text-center">Total Sales</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Daily Sales</h2>
                        <p>View daily sales data</p>
                        <a href="/sales/daily" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Weekly Sales</h2>
                        <p>View weekly sales data</p>
                        <a href="/sales/weekly" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
                <div className="card bordered">
                    <div className="card-body">
                        <h2 className="card-title">Monthly Sales</h2>
                        <p>View monthly sales data</p>
                        <a href="/sales/monthly" className="btn bg-blue-600 text-white">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales