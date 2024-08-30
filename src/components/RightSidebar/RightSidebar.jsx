import style from "./RightSidebar.module.css";
import apple from "../../Images/apple.png";
import disney from "../../Images/disney.jpg";
import hboMax from "../../Images/hbo.png";
import hulu from "../../Images/hulu.png";
import netflix from "../../Images/netflix.jpg";
import prime from "../../Images/prime.jpg";

function RightSidebar() {
  return (
    <>
      <div className={style.rightSidebar}>
        <div className={style.sidebar1}>
          <h3>Media Service</h3>
          <div className={style.rigthsidebarContent}>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={apple} alt="apple photo" />
                </div>
                <div className={style.brandName}>
                  <h6>Apple Tv</h6>
                </div>
              </div>
            </div>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={disney} alt="disney photo" />
                </div>
                <div className={style.brandName}>
                  <h6>Disney Tv</h6>
                </div>
              </div>
            </div>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={hboMax} alt="hbo max" />
                </div>
                <div className={style.brandName}>
                  <h6>HBO Max</h6>
                </div>
              </div>
            </div>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={hulu} alt="hulu photo" />
                </div>
                <div className={style.brandName}>
                  <h6>Hulu</h6>
                </div>
              </div>
            </div>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={netflix} alt="netflix photo" />
                </div>
                <div className={style.brandName}>
                  <h6>Netflix</h6>
                </div>
              </div>
            </div>
            <div className={style.element}>
              <div className={style.imgName}>
                <div className={style.brandImage}>
                  <img src={prime} alt="prime photo" />
                </div>
                <div className={style.brandName}>
                  <h6>Prime</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.sidebar2}>
          <h3>Genre</h3>
          <div className={style.sidebar2Content}>
            <p>action</p>
          </div>
          <div className={style.sidebar2Content}>
            <p>comedy</p>
          </div>
          <div className={style.sidebar2Content}>
            <p>drama</p>
          </div>
          <div className={style.sidebar2Content}>
            <p>sci-fi</p>
          </div>
          <div className={style.sidebar2Content && style.yellowEffect}>
            <p>thriller</p>
          </div>
          <div className={style.sidebar2Content}>
            <p>western</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
