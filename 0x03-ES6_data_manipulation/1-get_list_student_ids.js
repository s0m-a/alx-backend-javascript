export default function getListStudentIds(arr)
{
    if(Array.isArray(arr) !== true)
    {
        return [];
    }
    else{

    const ids = arr.map(obj => obj.id);
   return ids;
    }
}
