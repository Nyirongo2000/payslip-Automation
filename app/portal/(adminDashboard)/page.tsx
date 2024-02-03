import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">PAYSLIP STATISTICS</h1>
      {/* Add your main content here */}
      <div className="grid grid-cols-2 gap-4">
        {/* Top Row */}
        <div className="col-span-2 md:col-span-1">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            
            <img
          src="/paye.png"
          width={560}
          height={620}     
        />
            <p>Employee Engagement</p>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            
            <img
          src="/payro.jpg"
          width={560}
          height={620}     
        />
            <p>Progress reports</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-2 md:col-span-1">
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            
            <img
          src="/payroll.jpg"
          width={560}
          height={620}     
        />
            <p>Research responses</p>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            
            <img
          src="/payr.jpg"
          width={560}
          height={620}     
        />
            <p>Other activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


         
         

  
       

        

          
         

