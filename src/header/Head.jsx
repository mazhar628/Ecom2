import React from 'react'

const Head = () => {
    return (
        <>
        <section className='head'>
            <div className='container d_flex'>
                <div className= 'left row'>
                    <i className='fa fa-phone'></i>
                    <label>+88017 1573 49874</label>
                    <i className='fa fa-envelope'></i>
                    <label>attrabit@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <label>ENFlag</label>
                    <label htmlFor=''>EN</label>
                    <label>USAFlag</label>
                    <label htmlFor=''>US</label>

                </div>
            </div>
        </section>
        </>
    )
}

export default Head