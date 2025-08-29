package main

import (
	"github.com/gin-gonic/gin"
	"github.com/code-and-brain/zarish-care-service/internal/patient"
)

func main() {
	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	// Patient endpoints
	r.GET("/patients", patient.ListPatients)
	r.GET("/patients/:id", patient.GetPatient)
	r.POST("/patients", patient.CreatePatient)
	r.PUT("/patients/:id", patient.UpdatePatient)
	r.DELETE("/patients/:id", patient.DeletePatient)

	r.Run(":8080")
}