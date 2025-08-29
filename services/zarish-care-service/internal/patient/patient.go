package patient

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type Patient struct {
	ID            string   `json:"id"`
	Name          string   `json:"name"`
	DOB           string   `json:"dob"`
	Gender        string   `json:"gender"`
	Contact       string   `json:"contact"`
	MedicalHistory []string `json:"medicalHistory"`
}

var patients = []Patient{}

func ListPatients(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"patients": patients})
}

func GetPatient(c *gin.Context) {
	id := c.Param("id")
	for _, p := range patients {
		if p.ID == id {
			c.JSON(http.StatusOK, p)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Patient not found"})
}

func CreatePatient(c *gin.Context) {
	var newPatient Patient
	if err := c.ShouldBindJSON(&newPatient); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	patients = append(patients, newPatient)
	c.JSON(http.StatusCreated, newPatient)
}

func UpdatePatient(c *gin.Context) {
	id := c.Param("id")
	var update Patient
	if err := c.ShouldBindJSON(&update); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	for i, p := range patients {
		if p.ID == id {
			patients[i] = update
			c.JSON(http.StatusOK, update)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Patient not found"})
}

func DeletePatient(c *gin.Context) {
	id := c.Param("id")
	for i, p := range patients {
		if p.ID == id {
			patients = append(patients[:i], patients[i+1:]...)
			c.JSON(http.StatusNoContent, nil)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Patient not found"})
}