import { spirits } from "../../data/spirits";
import { VARIANTS } from "../../constants/variants";
import { getSpiritVariantImage } from "../../utils/getSpiritVariantImage";


export default function SpiritVariantTable() {




  return (

    <div className="
      overflow-x-auto
      bg-slate-900
      rounded-xl
      p-4
    ">


      <table className="
        min-w-max
        w-full
      ">


        <thead>

          <tr>

            <th className="
              text-left
              p-3
            ">
              Espíritu
            </th>


            {
              VARIANTS.map(variant => (

                <th
                  key={variant}
                  className="
                  p-3
                  text-sm
                  "
                >
                  {variant}
                </th>

              ))
            }


          </tr>

        </thead>



        <tbody>


        {
          spirits.map(spirit => (

            <tr
              key={spirit.id}
              className="
              border-t
              border-slate-700
              "
            >


              <td className="
                p-3
                font-bold
              ">
                {spirit.name}
              </td>



              {
                VARIANTS.map(variant => {


                  const image =
                    getSpiritVariantImage(
                      spirit,
                      variant
                    );


                  return (

                    <td
                      key={variant}
                      className="
                      p-2
                      text-center
                      "
                    >

                      <div className="
                        w-20
                        h-20
                        bg-slate-800
                        rounded-lg
                        flex
                        items-center
                        justify-center
                      ">

                        <img
                          src={image}
                          alt={`${spirit.name} ${variant}`}
                          className="
                          w-full
                          h-full
                          object-contain
                          "
                          onError={(e)=>{
                            e.currentTarget.style.opacity="0.2";
                          }}
                        />


                      </div>


                    </td>

                  );


                })
              }


            </tr>

          ))
        }


        </tbody>


      </table>


    </div>

  );

}