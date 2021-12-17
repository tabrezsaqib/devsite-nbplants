/* eslint-disable @next/next/no-img-element */
import React from "react"

const PlantSpeciesDetails = ({ plant_details }) => {
  return (
    <div className="m-4">
      {plant_details.length !== 0 ? (
        <div className="row" key={plant_details.id}>
          <div className="col-lg-4">
            <div className="d-flex flex-wrap">
              {plant_details.acf.image_url !== undefined &&
                plant_details.acf.image_url.map((item, index) => (
                  <div key={index} className="img-container">
                    <img src={item.thumbnail_image_url} alt="plant image" />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex">
              <h2>
                <strong>{`${plant_details.acf.genus} ${plant_details.acf["species"]}`}</strong>
              </h2>
              <h4 className="align-self-center">
                &nbsp;&nbsp;{plant_details.acf.common_name}
              </h4>
            </div>
            <hr />
            <h4>
              <strong>Characteristics</strong>
            </h4>
            <div className="d-flex flex-wrap">
              <div className="d-flex label-value-section">
                <p>
                  <strong>Habitat: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.habitat.map(
                  (item, index) => (
                    <p key={index}>{item ? item : "Not Available"} &nbsp;</p>
                  )
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Type: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_type.map(
                  (item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  )
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Arrangement: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_arrangement.map(
                  (item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  )
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Blage Edges: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_blade_edges.map(
                  (item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  )
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_shape.map(
                  (item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  )
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Flower Petal Colour: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.flower_petal_colour.map(
                  (item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  )
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Native or Introduced or Invasive: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics
                  .native_or_introduced_or_invasive
                  ? plant_details.acf.characteristics
                      .native_or_introduced_or_invasive
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Number: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_number
                  ? plant_details.acf.characteristics.leaf_number
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Number Flowers: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.number_flowers
                  ? plant_details.acf.characteristics.number_flowers
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Lip Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.lip_shape
                  ? plant_details.acf.characteristics.lip_shape
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stipule Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stipule_shape !==
                  undefined &&
                  plant_details.acf.characteristics.stipule_shape.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item ? item : "Not Available"} &nbsp;</p>
                      </div>
                    )
                  )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Position of hairs: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.positions_of_hairs !==
                  undefined &&
                  plant_details.acf.characteristics.positions_of_hairs.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item ? item : "Not Available"} &nbsp;</p>
                      </div>
                    )
                  )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Number Petals: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.number_petals
                  ? plant_details.acf.characteristics.number_petals
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>S Rank: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.s_rank
                  ? plant_details.acf.characteristics.s_rank
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Inflorescence: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.inflorescence !==
                  undefined &&
                  plant_details.acf.characteristics.inflorescence.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item ? item : "Not Available"} &nbsp;</p>
                      </div>
                    )
                  )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stems: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stems !== undefined &&
                  plant_details.acf.characteristics.stems.map((item, index) => (
                    <div key={index}>
                      <p>{item ? item : "Not Available"} &nbsp;</p>
                    </div>
                  ))}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stamen Number: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stamen_number
                  ? plant_details.acf.characteristics.stamen_number
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Armature: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.armature
                  ? plant_details.acf.characteristics.armature
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Bark Texture: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.bark_texture
                  ? plant_details.acf.characteristics.bark_texture
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Growth Form: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.growth_form
                  ? plant_details.acf.characteristics.growth_form
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Deciduous or Coniferous: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.deciduos_or_coniferous
                  ? plant_details.acf.characteristics.deciduos_or_coniferous
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaves per node: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaves_per_node
                  ? plant_details.acf.characteristics.leaves_per_node
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Divisions: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_divisions
                  ? plant_details.acf.characteristics.leaf_divisions
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Spore Bearing Leaflets: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.spore_bearing_leaflets
                  ? plant_details.acf.characteristics.spore_bearing_leaflets
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Bloom Time: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.bloom_time
                  ? plant_details.acf.characteristics.bloom_time
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Petal Symmetry: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.petal_symmetry !==
                  undefined &&
                  plant_details.acf.characteristics.petal_symmetry.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item ? item : "Not Available"} &nbsp;</p>
                      </div>
                    )
                  )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Fusion: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fusion
                  ? plant_details.acf.characteristics.fusion
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Fruits: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fruits !== undefined &&
                  plant_details.acf.characteristics.fruits.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item ? item : "Not Available"} &nbsp;</p>
                      </div>
                    )
                  )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Fruit Length: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fruit_length
                  ? plant_details.acf.characteristics.fruit_length
                  : "Not Available"}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Height: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.height
                  ? plant_details.acf.characteristics.height
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Labellum Lower Petal: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.labellum_lower_petal
                  ? plant_details.acf.characteristics.labellum_lower_petal
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Necter Spur: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.necter_spur
                  ? plant_details.acf.characteristics.necter_spur
                  : "Not Available"}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Note: &nbsp;</strong>
                </p>
                &nbsp;&nbsp;
                {plant_details.acf.note
                  ? plant_details.acf.note
                  : "Not Available"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="loader d-flex align-items-center">
              <img src="../../images/loading.gif" alt="loader" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .img-container {
          border-radius: 12px;
          margin: 5px;
          overflow: hidden;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .loader {
          height: 300px;
          img {
            width: 80px;
          }
        }
        .label-value-section {
          width: 50%;
        }
      `}</style>
    </div>
  )
}

export default PlantSpeciesDetails
