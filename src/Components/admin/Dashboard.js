import React from 'react'
import AdminLayout from '../../HOC/AdminLayout'


const Dashboard = () => {
    return (

        <AdminLayout>
            <div className="user_dashboard">
                <div>
                    <h3 style={{color: 'black'}}>Hello ADMIN</h3>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard
