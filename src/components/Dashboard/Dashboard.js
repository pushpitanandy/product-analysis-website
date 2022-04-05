import React, { useEffect, useState } from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            {
                <MyLineChart></MyLineChart>
            }
        </div>
    );
};

export default Dashboard;