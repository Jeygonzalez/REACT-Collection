import React from "react";
import { getImageUrl} from "./utils/utils.js";

function Avatar ({ person, size }) { return (
<img
className="avatar"
src={getImageUrl(person)}
alt={person.name}
width={size}
height={size}
/>
);
}

export default function Profile() {
    return (
    <>
    <div className="card">
    <Avatar size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "Yfe0qp2", }}
    />{" "}
    </div>
    <div className="card">
    <Avatar size={80}
    person={{ name: "Aklilu Lemma", imageId: "OKS67Lh", }}
    />{""}
    </div>
    <div className="card">
    <Avatar size={50} person={{ name: "Lin Lanying", imageId: "1bX5QH6", }}
    />
    </div>
    </>
    );
     }