import React from 'react';
import Chart from '../chart/Chart';
import { CiCalendar } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import profile from '../../assets/img/profile.jpg';


const Main = () => {
  return (
    <div className='flex flex-col md:flex-row bg-indigo-100 dark:bg-slate-950'>
      <section className='w-auto md:w-[70%] h-full'>
          <div className='w-full flex items-center justify-between'>
              <div className='text-indigo-950 m-4 font-bold text-md md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-tl from-indigo-800 to-pink-800'>
              Good Morning, IT Skills Academy 
              </div>
              <div className='flex md:hidden gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-400'>
                <CiCalendar />
                <IoIosNotifications />
                <IoMailUnreadOutline />
                <img src={profile} className='rounded-full w-8 h-8' />
              </div>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 lg-grid-cols-4 m-4 gap-4'>
              <div className='flex flex-col justify-between w-full md-w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md'>
                <div className='flex w-full items-center justify-between'>
                    <div className='text-4xl text-indigo-950 dark:text-slate-400'>
                      <IoWalletSharp />
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'>
                      <CiMenuKebab />
                    </div>
                </div>
                <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400'>
                      $500,495.00
                </div>
                <div className='text-indigo-950 dark:text-slate-400 text-sm text-semibold'>
                      Your Bank Balance
                </div>
              </div>
              <div className='flex flex-col justify-between w-full md-w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md'>
                <div className='flex w-full items-center justify-between'>
                    <div className='text-4xl text-indigo-950 dark:text-slate-400'>
                      <IoPieChartOutline />
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'>
                      <CiMenuKebab />
                    </div>
                </div>
                <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400'>
                      $500,495.00
                </div>
                <div className='text-indigo-950 dark:text-slate-400 text-sm text-semibold'>
                      Your Bank Balance
                </div>
              </div>
              <div className='flex flex-col justify-between w-full md-w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md'>
                <div className='flex w-full items-center justify-between'>
                    <div className='text-4xl text-indigo-950 dark:text-slate-400'>
                      <FaPeopleCarry />
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'>
                      <CiMenuKebab />
                    </div>
                </div>
                <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400'>
                      $500,495.00
                </div>
                <div className='text-indigo-950 dark:text-slate-400 text-sm text-semibold'>
                      Employee Working Today
                </div>
              </div>
              <div className='flex flex-col justify-between w-full md-w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md'>
                <div className='flex w-full items-center justify-between'>
                    <div className='text-4xl text-indigo-950 dark:text-slate-400'>
                      <FaRegIdCard />
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'>
                      <CiMenuKebab />
                    </div>
                </div>
                <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400'>
                      $500,495.00
                </div>
                <div className='text-indigo-950 dark:text-slate-400 text-sm text-semibold'>
                      This Week Card Processing
                </div>
              </div>
          </div> 
          <div className='grid sm:grid-cols-4 md:grid-cols-4 lg-grid-cols-4 m-4 gap-4 w-auto'>
            <div className='col-span-4 md:col-span-1 h-28  bg-white dark:bg-slate-900'>
              <div className='flex flex-col justify-between pd-4 h-full'>
                <div className='font-semibold text-indigo-950 dark:text-slate-400'>New Clients</div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='text-5xl sm:text-xl lg-text-5xl font-bold text-indigo-900 dark:text-slate-400 ml-1'>64</div>
                    <div className='flex px-2 py-1 text-sm rounded-full bg-green-500 items-center text-green-900 mb-1 mr-1'>+69%</div>
                  </div>
              </div>
            </div>
            <div className='col-span-4 md:col-span-3 row-span-2 bg-white dark:bg-slate-900/50'>
               <Chart /> 
            </div>
             <div className='col-span-4 md:col-span-1 h-28 bg-white dark:bg-slate-900'>
              <div className='flex flex-col justify-between pd-4 h-full'>
                <div className='font-semibold text-indigo-950 dark:text-slate-400'>Invoice Overdue</div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='text-5xl sm:text-xl lg-text-5xl font-bold text-indigo-900 dark:text-slate-400 ml-1'>9</div>
                    <div className='flex px-1 py-1 text-sm rounded-full bg-green-500 items-center text-green-900 mb-1 mr-1'>+15%</div>
                  </div>
              </div>
            </div>
          </div>
          <div className='m-4'>
            <div className='text-indigo-950 dark:text-slate-400 font-bold text-2xl my-4'>
              Recent Transactions
            </div>
            <table className='w-full text-sm text-left dark:text-indigo-500'>
              <thead className='text-xs text-indigo-950 dark:text-slate-400 uppercase bg-gray-50 dark:bg-slate-900/50'>
              <tr>
                <th scope='col' className='py-3 px-6'>Person</th>
                <th scope='col' className='py-3 px-6'>Bank Account</th>
                <th scope='col' className='py-3 px-6'>Amount</th>
              </tr>
              </thead>
              <tbody className='text-indigo-950 dark:text-slate-400'>
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
                <tr className='bg-white dark:bg-slate-900/50 bodder-b'>
                  <td className='py-4 px-6'>John Doe</td>
                  <td className='py-4 px-6'>545 456 468</td>
                  <td className='py-4 px-6'>$4, 500.000</td>
                </tr> 
              </tbody>
            </table>
          </div>
      </section>
      
      <section className='w-full md:w-[30%] bg-indigo-200 dark:bg-slate-900/20'>
        
        <div className='flex flex-col m-4'>
          <div className='hidden md:flex gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-400'>
            <CiCalendar />
            <IoIosNotifications />
            <IoMailUnreadOutline />
            <img src={profile} className='rounded-full w-8 h-8' />
          </div>
              <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 m-4 rounded h-auto shadow-lg'>
                <div>
                  <div className='font-bold text-indigo-950 dark:text-slate-400'>Formation status</div>
                  <div className='text-xs font-bold text-indigo-500 dark:text-sltage-400'></div>
                </div>
                  <div className='h-4 w-full dark:bg-gray-200 rounded-lg'>
                    <div className='h-4 bg-indigo-900 rounded-lg w-[30%]'></div>
                  </div>
                <div className='flex flex-col items-center'>
                  <div className='tont-bold text-indigo-950 dark:text-slate-400'>Estimated Processing</div>
                  <div className='font-semibold text-indigo dark:text-slate-400 text-sm'>4-5 Business Days</div> 
                </div>
                <div>
                  <button className='bg-gradient-to-tr w-full p-4 from-pink-900 to-indigo-900 text-white reounded-xl dark:text-slate-400'>View Status</button>
                </div>
                <div className='flex flex-col gap-5 m-4 text-indigo-900 dark:text-slate-900'>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
                    <div className='flex items-center justify-center rounded-full w-8 h-8 text-slate-900 dark:text-slate-400 bg-indigo-300 dark:bg-slate-950'>
                    <CiTimer />
                    </div>
                    <div>
                      <div className='font-semibold text-sm'>
                        Run Payroll 
                      </div>
                      <div className='text-indigo-500 text-xs'>
                        March 7th at 4:50 pm
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 my-10 mx-4 p-4 rounded-lg h-auto'>
                  <div>
                    <div className='font-bold text-indigo-950 dark:text-slate-400'>
                       Board Meeting 
                    </div>
                    <div className='font-bold text-indigo-950 dark:text-slate-400'>
                       March 5th 2024
                    </div>
                  </div>
                  <div className='font-semibold text-indigo-900 dark:text-slate-400 text-sm'>
                     You have been invited to attend a meeting of board of directors 
                  </div>
                </div>
              </div>
        </div>

      </section>
    </div>
  );
}

export default Main