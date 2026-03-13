var dbPromise = idb.open('ProductList',4,upgradeDB=>{
    // upgradeDB.createObjectStore('Products',{keyPath:'id'})
    // upgradeDB.createObjectStore('Orders',{keyPath:"id"})
    var store = upgradeDB.transaction.objectStore('Products')
    store.createIndex('name','name',{unique:true})
})


document.getElementById('prdId').onclick = function(){
    var items = [
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 7
        },
        {
          name: 'Stool',
          id: 'st-re-pin',
          price: 59.99,
          color: 'red',
          material: 'pine',
          description: 'A light, high-stool',
          quantity: 3
        },
        {
          name: 'Chair',
          id: 'ch-blu-pin',
          price: 49.99,
          color: 'blue',
          material: 'pine',
          description: 'A plain chair for the kitchen table',
          quantity: 1
        },
        {
          name: 'Dresser',
          id: 'dr-wht-ply',
          price: 399.99,
          color: 'white',
          material: 'plywood',
          description: 'A plain dresser with five drawers',
          quantity: 4
        },
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 11
        }
      ];
      dbPromise.then(db=>{
        var tx = db.transaction('Products','readwrite')
        var store = tx.objectStore('Products')

          return Promise.all( items.map(item=>{
                console.log('Adding item ',item)
                return store.add(item)
            }))
            .then(()=>{
                console.log('items added successfully')
            })
            .catch(err=>{
                tx.abort()
                console.log(err)
            })
        
      })
      .catch(err=>{
        console.log(err)
      })
}


document.getElementById('ordId').onclick = function(){
    var items = [
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 7
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 3
        },
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        }
      ];


      dbPromise.then(db=>{
        var tx = db.transaction('Orders','readwrite')
        var store = tx.objectStore('Orders')

       return Promise.all( items.map(item=>{
            console.log('adding item ',item)
            return store.add(item)
        })).then(()=>{
            console.log('items added')
        }).catch(err=>{
            console.log(err)
        })
      })
      .catch(err=>{
        console.log(err)
      })
}


document.getElementById('searchBtn').onclick = function(){
    var prdName = document.getElementById('searchData').value
    dbPromise.then(db=>{
        var tx = db.transaction('Products','readonly')
        var store = tx.objectStore('Products')
        // return store.get()//primary Key
        var index = store.index('name')
        return index.get(prdName)
    }).then(product=>{
        if(product){
            for(var elem in product){
                document.getElementById('prdData').innerHTML+=elem+"::"+product[elem]+'<br>'
            }
        }
        else{
            document.getElementById('prdData').innerHTML = "Product not found"
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

/**
 * getOrders
 * getMatchedProducts
 * checkQuatity
 * updateProducts
 * clearOrders
 */

document.getElementById('btn').onclick = function(){
    getOrders().then(Orders=>{
        // console.log(Orders)
        return ProcessOrders(Orders)
    }).then(prdList=>{
        // console.log(prdList)
        return UpdateProducts(prdList)
    })
}

function UpdateProducts(prdList){
   return dbPromise.then(db=>{
        var tx = db.transaction('Products','readwrite')
        var store = tx.objectStore('Products')

       return Promise.all( prdList.map(product=>{
            return store.put(product)
        }))
    }).catch(err=>{
        console.log(err)
    })
}

function checkQuantity(product,order){
    return new Promise((resolve,reject)=>{
        var item = product
        var quantity = product.quantity - order.quantity
        if(quantity<0){
            //throw error
            //out of stock
            reject('out of stock')
        }
        else{
            //update product
            item.quantity = quantity
            resolve(item)
        }
    })
    
}

function ProcessOrders(Orders){
    return dbPromise.then(db=>{
        var tx = db.transaction('Products','readonly')
        var store = tx.objectStore('Products')
        return Promise.all( Orders.map(order=>{
            console.log(order)
            return store.get(order.id).then(product=>{
                return checkQuantity(product,order)
            })
        }))        
    })
    .catch(err=>{
        console.log(err)
    })
}

function getOrders(){
   return dbPromise.then(db=>{
        var tx = db.transaction('Orders','readonly')
        var store = tx.objectStore('Orders')
        return store.getAll()
    })
    .catch(err=>{
        console.log(err)
    })
}