import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";


const Statistics = () => {

    const [donation, setDonation] = useState([]);
    const [yourDonation, setYourDonation] = useState(0)
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonation(data.length))
    }, [])

    useEffect(()=> {
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if (donationItem !== null) {
                setYourDonation(donationItem.length)
            }

    },[])

    
    const totalDonation = donation - yourDonation
    console.log(donation)
    console.log(yourDonation)

    
    console.log(totalDonation)


    const data = [
        { name: "Total Donation", value: totalDonation },
        { name: "Your Donation", value: yourDonation }
    ]

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <PieChart width={400} height={400} >
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-10" >
                <div className="flex items-center justify-center gap-1 ">
                    <h2 className="text-lg">Total Donation</h2>
                    <div className="w-24 h-4 bg-[#FF444A] rounded"></div>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <h2 className=" text-lg">Your Donation</h2>
                    <div className="w-24 h-4 bg-[#00C49F] rounded"></div>
                </div>

            </div>
        </div>

    );
};

export default Statistics;




