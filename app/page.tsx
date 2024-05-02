"use client"

import { useState } from "react"; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SidebarItem {
  id : string;
  icon: string;
  text: string;
  checked: boolean;
}

const initialSideBarContent = [
  { id: 'sidebar1', icon: 'key', text: 'Space & API Keys', checked: false },
  { id: 'sidebar2', icon: 'folder', text: 'Enrich Files', checked: false },
  { id: 'sidebar3', icon: 'cube', text: 'Playground', checked: true },
  { id: 'sidebar4', icon: 'key', text: 'Usage', checked: false },
  { id: 'sidebar5', icon: 'folder', text: 'Billings', checked: false },
  { id: 'sidebar6', icon: 'cube', text: 'Transactions', checked: false },
  { id: 'sidebar7', icon: 'key', text: 'Contact Us', checked: false },
  { id: 'sidebar8', icon: 'folder', text: 'Settings', checked: false },
  { id: 'sidebar9', icon: 'cube', text: 'Docs', checked: false }
];

const initialButtonList = [
  {id: 'button1', text: 'Merchant', checked: true},
  {id: 'button2', text: 'Notes', checked: false},
]

export default function Home() {
  const [sideBarContent, setSideBarContent] = useState(initialSideBarContent)
  const [buttonList, setButtonList] = useState(initialButtonList)

  const onToggleCheck = (id: string) => {
    const newContent = sideBarContent.map((item) => ({
      ...item,
      checked: item.id === id
    }));
    setSideBarContent(newContent);
  };

  const onToggleButtonCheck = (id: string) => {
    const newContent = buttonList.map((item) => ({
      ...item,
      checked: item.id === id
    }));
    setButtonList(newContent);
  };

  const sideBarContentSection = (item : SidebarItem) => {
    return (
      <button key={item.id} className={`w-full h-10 flex items-center px-5 ${item.checked ? 'bg-background3' : ''}`} onClick={() => onToggleCheck(item.id)}>
        <img className='mr-6' src={`/icons/${item.icon}.svg`} alt={item.icon} />
        <p className={`font-Montserrat font-normal ${item.checked ? 'text-white font-semibold' : 'text-text1 text-sm'}`}>
          {item.text}
        </p>
      </button>
    )
  }

  const Component = () => {
    const codeString = `{"description": "wendys","amount": 2.97,"country": "US","iso_currency_code": "USD","entry_type": "debit","account_holder_type": "consumer","recurrence_group": null,"recurrence": "one off","website": "wendys.com","logo": "https://logos.ntropy.com/wendys.com","merchant": "Wendy's","merchant_id": "fd3ddbe9-bb63-35d5-9824-32a9d54642a8","location": "","labels": ["fast food"]}`;
    return (
      <SyntaxHighlighter language="javascript" style={twilight}  wrapLines={true} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  return (
    <div className="w-screen h-screen grid gap-2 p-2" style={customStyle.container}>

      {/* space user bar */}
      <div className="col-span-1 row-span-1 rounded flex justify-between p-3.5 bg-background2" >

        <div className='flex justify-center items-center'>
          <img src="/icons/planet.svg" alt="planet" />
          <p className='font-Montserrat font-semibold text-lg text-white ml-3.5'>Bu Di’s Space</p>
        </div>

        <div className='flex items-center'>
          <img src="/icons/dropdown.svg" alt="dropdown" />
        </div>

      </div>

      {/* top bar */}
      <div className="col-span-1 row-span-1 flex items-center p-8 rounded bg-background2" >
        <p className="font-inter font-semibold text-3xl text-white">Playground</p>
      </div>

      {/* side bar */}
      <div className="col-span-1 row-span-1 grid gap-2" style={customStyle.sideBarContainer}>

        <div className="rounded col-span-1 row-span-1 w-full py-5 bg-background2" >
          {sideBarContent.slice(0,3).map((item) => sideBarContentSection(item))}
        </div>

        <div className="rounded col-span-1 row-span-1 w-full py-5 bg-background2" >
          {sideBarContent.slice(3,6).map((item) => sideBarContentSection(item))}
        </div>

        <div className="rounded col-span-1 row-span-1 w-full flex flex-col justify-center bg-background2" >
          {sideBarContent.slice(6,9).map((item) => sideBarContentSection(item))}
        </div>

        <div className="rounded col-span-1 row-span-1 w-full bg-background2 flex flex-col justify-between items-center p-5" >

          <p className='text-text1 font-Montserrat font-normal text-xs'>14 days left of trial</p>
          <div className='py-2 px-5  rounded-full border-white border-2'>
            <p className='text-white font-Montserrat font-medium text-sm'>Upgrade to a paid plan</p>
          </div>
          
          <div className='px-6 w-full flex items-center'>
            <div className='w-10 h-10 rounded-full bg-pink-400 grid place-content-center'>
              <p className='text-white font-Montserrat font-semibold text-base'>PB</p>
            </div>
            <div className='flex flex-col justify-center ml-3.5'>
              <p className='text-white font-Montserrat font-semibold text-sm'>Park Bu Di</p>
              <p className='text-text2 font-Montserrat font-normal text-xs'>park.bu.di@bni.co.id</p>
            </div>
          </div>

        </div>

        <div className="rounded col-span-1 row-span-1 w-full grid place-content-center">
          <p className="rounded font-jura font-medium text-2xl text-white">core.ai</p>
        </div>
      </div>

      {/* content */}
      <div className="col-span-1 row-span-1 relative">

        <div className="px-40 py-6 w-full h-full ">
          {buttonList.map((item) => (<button key={item.id} className={`px-7 py-1 ${item.checked ? 'bg-white rounded-full text-text3 font-Montserrat font-semibold text-sm' : 'rounded-full text-text1 font-Montserrat font-medium text-sm'} `} onClick={() => onToggleButtonCheck(item.id)}>{item.text}</button>))}
          <div className="relative" >
            <Component></Component>
          </div>
        </div>

        


      </div>

    </div>
  )

}

const customStyle = {
  container : {
    backgroundColor : 'black', 
    gridTemplateColumns : '17.5rem 1fr', 
    gridTemplateRows : '6.25rem 1fr'
  },
  sideBarContainer : {
    gridTemplateColumns : '1fr', 
    gridTemplateRows : '1fr 10.625rem 8rem 10.625rem 3rem'
  }
}


