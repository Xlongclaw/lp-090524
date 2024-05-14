export default function ServiceWrapper({description,img,title}:{title:string,description:string,img:string}) {
  return (
    <div className=" flex flex-col items-center p-12">
        <img className="w-16 h-16 mb-8 object-contain" src={img} alt="" />
        <p className="playfair-display text-2xl font-medium text-center">{title}</p>
        <p className="text-black/50 text-center text-sm">{description}</p>
    </div>
  )
}
