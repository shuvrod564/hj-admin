import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3"> 
        <div className="flex">
            <div className="progres__card shadow w-full rounded-lg px-3 xl:px-4 py-3" style={{backgroundColor: '#ecf2ff'}}>
                <figure className="mb-0 icon d-inline-flex justify-content-center align-items-center rounded-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                </figure>  
                <div className="col mt-2">
                    <p className="text-dark font-medium text-base md:text-lg mb-0 lh-1-2">Total Users</p>
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">28.05k</span> 
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="progres__card shadow w-full rounded-lg px-3 xl:px-4 py-3" style={{backgroundColor: '#fef5e5'}}>
                <figure className="mb-0 icon d-inline-flex justify-content-center align-items-center rounded-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"/></svg>
                </figure>  
                <div className="col mt-2">
                    <p className="text-dark font-medium text-base md:text-lg mb-0 lh-1-2">Total Service Providers</p>
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">28.05k</span> 
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="progres__card shadow w-full rounded-lg px-3 xl:px-4 py-3" style={{backgroundColor: '#fdede8'}}>
                <figure className="mb-0 icon d-inline-flex justify-content-center align-items-center rounded-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M320 33.8V160H48.5C100.2 82.8 188.1 32 288 32c10.8 0 21.5 .6 32 1.8zM352 160V39.1C424.9 55.7 487.2 99.8 527.5 160H352zM29.9 192H96V320H0c0-46 10.8-89.4 29.9-128zM192 320H128V192H448V320H384v32H576v80c0 26.5-21.5 48-48 48H352V352c0-35.3-28.7-64-64-64s-64 28.7-64 64V480H48c-26.5 0-48-21.5-48-48V352H192V320zm288 0V192h66.1c19.2 38.6 29.9 82 29.9 128H480z"/></svg>
                </figure>  
                <div className="col mt-2">
                    <p className="text-dark font-medium text-base md:text-lg mb-0 lh-1-2">Total House Builders</p>
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">28.05k</span> 
                </div>
            </div>
        </div>
        <div className="flex">
            <div className="progres__card shadow w-full rounded-lg px-3 xl:px-4 py-3" style={{backgroundColor: '#e8f7ff'}}>
                <figure className="mb-0 icon d-inline-flex justify-content-center align-items-center rounded-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"/></svg>
                </figure>  
                <div className="col mt-2">
                    <p className="text-dark font-medium text-base md:text-lg mb-0 lh-1-2">Total Blogs</p>
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">28.05k</span> 
                </div>
            </div>
        </div> 
        <div className="flex">
            <div className="progres__card shadow w-full rounded-lg px-3 xl:px-4 py-3" style={{backgroundColor: 'rgb(230, 255, 250)'}}>
                <figure className="mb-0 icon d-inline-flex justify-content-center align-items-center rounded-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                </figure>  
                <div className="col mt-2">
                    <p className="text-dark font-medium text-base md:text-lg mb-0 lh-1-2">Clinics Request</p>
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">28.05k</span> 
                </div>
            </div>
        </div>
        
    </div>  
    </main>
  );
}
