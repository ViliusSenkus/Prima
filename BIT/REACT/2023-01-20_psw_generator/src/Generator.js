import Header from './content/Header';
import Input from './content/Input';
import History from './content/History';
import { useEffect, useState } from 'react';


function Generator() {
  
  const [data, setData]=useState({}); 
  const [renew, setRenew]=useState(false);

  return (
    <div className='container'>
      <Header data={data} renew={renew} setRenew={setRenew} />
      <Input setData={setData}/>
      <History renew={renew} />
      <div>
        Password strengh is characterised according number of same element repeating in the password. The more difficult password the more different elements it will contain. 
      </div>
    </div>
  );
}

export default Generator;
