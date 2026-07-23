import React, { useRef } from 'react'

const Showingdata = () => {
    const refname = useRef("")

    const showname = useRef("")

    const refmob = useRef("")

    const refmail = useRef("")

    const refskills = useRef("")

    const showmobile = useRef("")

    const showadd = useRef("")

    const showskills = useRef("")

    const handleclick = () => {
        showname.current.innerText = refname.current.value

        showmobile.current.innerText = refmob.current.value

        showadd.current.innerText = refmail.current.value

        showskills.current.innerText = refskills.current.value

        console.log("Name :", refname.current.value)
        console.log("Mobile :", refmob.current.value)
        console.log("Email :", refmail.current.value)
        console.log("Skills :", refskills.current.value)
    }

    return (
        <div className='min-h-screen bg-slate-100 p-6'>
            <div className='mx-auto flex max-w-6xl flex-col gap-6 rounded-2xl bg-white p-6 shadow-xl md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <h2 className='mb-6 text-2xl font-semibold text-slate-800'>Resume Builder</h2>
                    <div className='space-y-4'>
                        <input
                            type='text'
                            placeholder='Enter the name'
                            ref={refname}
                            className='w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
                        />
                        <input
                            type='text'
                            placeholder='Enter the Mobile'
                            ref={refmob}
                            className='w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
                        />
                        <input
                            type='text'
                            placeholder='Enter the Email'
                            ref={refmail}
                            className='w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
                        />
                        <input
                            type='text'
                            placeholder='Enter the Skills'
                            ref={refskills}
                            className='w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
                        />
                        <button
                            onClick={handleclick}
                            className='rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700'
                        >
                            Show All
                        </button>
                    </div>
                </div>

                <div className='w-full rounded-2xl border border-slate-200 bg-slate-50 p-6 md:w-1/2'>
                    <h3 className='mb-5 text-xl font-semibold text-slate-800'>Resume Details</h3>
                    <div className='space-y-4'>
                        <div>
                            <p className='text-sm font-medium uppercase tracking-wide text-slate-500'>Name</p>
                            <p ref={showname} className='mt-1 text-lg font-semibold text-slate-800'>Name</p>
                        </div>

                        <div>
                            <p className='text-sm font-medium uppercase tracking-wide text-slate-500'>Mobile</p>
                            <p ref={showmobile} className='mt-1 text-lg font-semibold text-slate-800'>Mobile</p>
                        </div>

                        <div>
                            <p className='text-sm font-medium uppercase tracking-wide text-slate-500'>Email</p>
                            <p ref={showadd} className='mt-1 text-lg font-semibold text-slate-800'>Email</p>
                        </div>

                        <div>
                            <p className='text-sm font-medium uppercase tracking-wide text-slate-500'>Skills</p>
                            <p ref={showskills} className='mt-1 text-lg font-semibold text-slate-800'>Skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showingdata