function reversestring(namee)
{
  let res="";
  let n=namee.length;
  for(let i=n-1; i>=0; i--)
  {
    res+=namee[i];
  }
  console.log(res);
}


function stringpalindrome(namee)
{
  let res1="";
  let res2="";
  let i=0;
  let n=namee.length;

  while(i<n)
  {
    res1+=namee[i];
    i++;
  }
  let j=n-1;
  while(j>=0)
  {
    res2+=namee[j];
    j--;
  }

  if(res1==res2)
  {
    console.log(true);
  }
  else
  {
    console.log(false);

  }
}


function countvowels(namee)
{
  let count=0;
  for(let i=0; i<namee.length; i++)
  {
    if(namee[i]=='a' || namee[i]=='e' || namee[i]=='i' || namee[i]=='o' || namee[i]=='u')
    {
      count++;
    }
  }
  console.log(count);

}


function replacespaces(namee)
{
  let res="";
  for(let i=0; i<namee.length; i++)
  {
    if(namee[i]==' ')
    {
      res+='%20';
      continue;
    }
    res+=namee[i];
  }
  console.log(res);
}

function reverseeachword(namee)
{
  let res="";
  let i=0;
  let n=namee.length;
  while(i<n)
  {
    while(i<n && namee[i]==' ')
    {
      i++;
    }
    let j=i+1;

    while(j<n && namee[j]!=' ')
    {
      j++;
    }
    let sub=namee.slice(i, j);

    if(res==""){
      res+=sub;
    }
    else{
      res=sub+" "+res;
    }
    i=j;
  }
  console.log(res);
}


function removeduplicates(namee)
{
  let n=namee.length;
  let res=""; 
  const mpp=new Map();
  for(let i=0; i<n ;i++)
  {
    if(mpp.get(namee[i]))
    {
      continue;
    }
    mpp.set(namee[i], 1);
    res+=namee[i];
  }
  console.log(res);
}


function firstnonrepeating(namee)
{
  let n=namee.length;
  let mpp=new Map();
  for(let i=0; i<n; i++)
  {
    if(mpp.get(namee[i]))
    {
      mpp.set(namee[i], 2);
    }  
    else
    {
    mpp.set(namee[i], 1);
    }
  }

  for(let i=0; i<n; i++)
  {
    if(mpp.get(namee[i])==1)
    {
      console.log(namee[i]);
      break;
    }
  }
}


let permutations=(str)=>{
  if(str.length==1)
  {
    return [str];
  }
  else if(str.length==2)
  {
    return [str, str[1]+str[0]];
  }
  
  let res=[];

  for(let i=0; i<str.length; i++)
  {
    let temp=permutations(str.slice(0, i)+str.slice(i+1)).map((val)=>{str[i]+val});
    res.push(...temp);
  }
  return res;  
};


let anagrams=(str1, str2)=>{
  if(str1.length!=str2.length)
  {
    return false;
  }

  let newstr1=str1.split('').sort().join('');
  let newstr2=str2.split('').sort().join('');

  let i=0; 

  while(i<str1.length)
  {
    if(newstr1[i]!=newstr2[i])
    {
      return false;
    }
    i++;
  }
  return true;
};


let compress=(str)=>{
  let n=str.length;
  let mpp=new Map();
  for(let i=0; i<n; i++)
  {
    mpp.set(str[i], (mpp.get(str[i]) || 0)+1);
  }

  let res="";
  for(let [key, value] of mpp)
  {
    let abc=key+value;
    res+=abc;
  }
  return res;
};

