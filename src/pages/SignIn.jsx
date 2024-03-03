import React from 'react'
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import AdminSignIn from '../components/SignIn/AdminSignIn';
import PatientSignIn from '../components/SignIn/PatientSignIn';
import DoctorSignIn from '../components/SignIn/DoctorSignIn';

export default function SignIn() {
  const navigate = useNavigate();     // navigate to previous page
  return (
    <>
      <div className='float-start pl-2 text-gray-700 fixed'> <button onClick={() => navigate(-1)}><ArrowBackRoundedIcon /> </button> </div>
      <div className='w-80 container mx-auto sm:w-[450px]'>
        <div className='text-start'>
          <h1 className='text-3xl font-semibold'>Sign In</h1>
          <p className='text-base'>Don't have an Account? <b className='cursor-pointer pl-1'><Link to="/createaccount">Sign Up</Link> </b> </p>
        </div>

        <Tabs defaultValue={1} className='mt-2.5'>
          <TabsList className='flex w-full rounded-t-xl font-sans shadow-lg bg-slate-300'>
            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-sans ${selected
                      ? 'text-white bg-cyan-600'
                      : 'text-gray-700 bg-transparent focus:text-white hover:bg-white cover-fit'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-bold w-full p-2  border-0 rounded-tl-lg flex justify-center focus:outline-0`,
                }),
              }}
              value={1} >
              Patient
            </Tab>

            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-sans ${selected
                      ? 'text-white bg-cyan-600'
                      : 'text-gray-700 bg-transparent focus:text-white hover:bg-white'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-bold w-full p-2  border-0 rounded-sm flex justify-center focus:outline-0`,
                }),
              }}
              value={2} >
              Doctor
            </Tab>

            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-sans ${selected
                      ? 'text-white bg-cyan-600'
                      : 'text-gray-700 bg-transparent focus:text-white hover:bg-white'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-bold w-full p-2  border-0 rounded-tr-lg flex justify-center focus:outline-0`,
                }),
              }}
              value={3} >
              Admin
            </Tab>

          </TabsList>
          <TabPanel value={1}>
            <PatientSignIn />
          </TabPanel>
          <TabPanel value={2}>
            <DoctorSignIn />
          </TabPanel>
          <TabPanel value={3}>
            <AdminSignIn />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}