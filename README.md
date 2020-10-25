# Mapping_Earthquakes

Data of earthquakes in tectonic plates over the past 7 days.

## Introduction

The United States Geological Survey (USGS) (https://www.usgs.gov/) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. They develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. I have built a set of tools that will allow visualization of USGS earthquake data. This app is intended for displaying the earthquake data: illustrate the relationship between the location and frequency of seismic activity and tectonic plates, which could attract potential funding agencies or industrial sponsors to support rearch on improving our planet. 

Please find the code in the repository:
<https://github.com/keyoumao/Mapping_Earthquakes/tree/master/Earthquake_Challenge> <br>
The link of the website is attached as follows:
<https://keyoumao.github.io/Mapping_Earthquakes/>

## Basic Map
The basic application is shown as below:
![alt text](https://github.com/keyoumao/Mapping_Earthquakes/blob/master/Earthquakes_past7days/Capture.JPG)


## Steps

The steps are describe below.

1. **Dataset guidelines**

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. 

   When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.


2. **Import & Visualize the Data**

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

    - Data markers reflects the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

    - Popups provide additional information about the earthquake when a marker is clicked.
    
    - Legend provide more context for the map data.
    
    - The final visualization looks something like the map above.


## Advanced Visualization:
Here, we could select different layers of choice and display the tectonic activity and reveal its relationship with the live earthquakes. 

![alt text](https://github.com/keyoumao/Mapping_Earthquakes/blob/master/Annotation%202020-06-28%20213311.png)
