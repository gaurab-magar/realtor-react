// import React, { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';
// import {Doc, getDoc} from 'firebase/firestore';
// import {db} from 'firebase';
// import { Spinner } from '../Components/Spinner';
// export const ListingDetail = () => {
//     const params = useParams();
//     const [listing, setListing] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         async function fetchListing(){
//             const docRef = Doc(db,'listings',params.id);
//             const docSnap = await getDoc(docRef)
//             if(docSnap.exists()){
//                 setLoading(false);
//                 setListing(docSnap.data());
//                 console.log("Document data:", docSnap.data());
//             } else {
//               // Document does not exist!
//               console.log("No such document!");
//             }
//         }
//         fetchListing();
//     },[params.id])
//     if(loading){
//         return <Spinner />
//     }
//   return (
//     <div>listingDetail</div>
//   )
// }
