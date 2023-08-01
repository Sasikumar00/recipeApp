s = "&dishType=Biscuits and cookies&dishType=Bread&dishType=Cereals&dishType=Condiments and sauces&dishType=Desserts&dishType=Drinks&dishType=Maincourse&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side dish&dishType=Soup&dishType=Starter&dishType=Sweets"

ar = s.split('&dishType=')
ar.pop(0)
# print(ar)
ar = ['Biscuits and cookies', 'Bread', 'Cereals', 'Condiments and sauces', 'Desserts', 'Drinks', 'Maincourse', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets']
for i in ar:
    htmlStr = ''
    htmlStr = '''<div className="cuisineType-option">
                 <label htmlFor="'''+i+'''">'''+' '.join(i.split('-')).capitalize()+'''</label>
                 <input type="checkbox" name="'''+ i +'''" id="'''+ i +'''" value="'''+ i +'''"/>
                 </div>'''
    print(htmlStr)