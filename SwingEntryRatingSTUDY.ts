# SWINGENTRYRATING
# WGRIFFITH2 (C) 2014

declare lower;
INPUT kPERIOD = 40;
INPUT DPERIOD = 3;

# STOCHASTICSLOW
DEF FASTLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "k period" = kPERIOD);
DEF SLOWLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "k period" = kPERIOD).SLOWD;

# TEST
DEF GREENPRICE = FASTLINE >= SLOWLINE;
DEF REDPRICE = FASTLINE < SLOWLINE;

plot RATING =

if
GREENPRICE
AND CLOSE >= OHLC4[1]
AND LOWEST(FASTLINE[1],2) <= 20
then 1

else if
REDPRICE
AND CLOSE <= OHLC4[1]
AND HIGHEST(FASTLINE[1],2) >= 80
then -1

else 0;