import "./OurProducts.css";
import {useTitle} from "../../../Utils/UseTitle.ts";

const rawModules = import.meta.glob(
    "/src/assets/images/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;

const imageModules: Record<string, string> = {};
for (const path in rawModules) {
    const filename = path.split("/").pop();
    if (filename) imageModules[filename] = rawModules[path];
}


export function OurProducts() {
    useTitle("Our shoes")
    return (
        <div className="OurProducts">

        </div>
    );
}
