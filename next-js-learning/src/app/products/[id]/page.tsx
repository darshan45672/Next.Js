export default function ProductDetials( {params}:{params: {id: string}}) {
    return (
        <div>
            <h1>Product Detial Page</h1>
            <p>This is the product page  of {params.id}</p>
        </div>
    );
}