export default function Meme() {
  return (
    <form action="" className="generator">
      <div className="generator-toptext">
        <label htmlFor="toptext">Top text</label>
        <input type="text" name="toptext" id="toptext" placeholder="Shut up"/>
      </div>
      <div className="generator-bottext">
        <label htmlFor="bottext">Bottom text</label>
        <input type="text" name="bottext" id="bottext" placeholder="And take my money"/>
      </div>
      <button className="generator-generate">
        <span>Get a new meme image</span>
        <img src="https://smaylikivk.ru/media/smiles/1f5bc-kartina.png" alt="pic-frame emoji"  className="generator-generate-img"/>
      </button>   
    </form>
  )
}