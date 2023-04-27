import sys
import warnings
  

warnings.filterwarnings("ignore")

def runs(wk , t1 , t2 , std):
    import joblib
    wk = int(wk)
    t1 = int(t1)
    t2 = int(t2)
    std =int(std)
    reg1 = joblib.load('models/P' + str( t1 - 1) + "1")
    reg2 = joblib.load('models/P' + str(t2 - 1) + "2")
    reg3 = joblib.load('models/P' + str(t1 - 1) + "S")
    reg4 = joblib.load('models/PSF')

    p1 = reg1.predict([[ t2 , wk ]])
    p2 = reg2.predict([[ t1 , wk ]])
    p3 = reg3.predict([[ std, wk ]])
    p4 = reg4.predict([[ std, wk ]])
    prediction = ((p1 + p2 + p3 + p4)/4)
    return prediction
    
  
   
  
     

print(runs(sys.argv[1] , sys.argv[2] , sys.argv[3] , sys.argv[4]))



