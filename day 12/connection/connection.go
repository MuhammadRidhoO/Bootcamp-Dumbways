package connection

import (
	"context"
	"fmt"
	"os"
	// "time"
	// "strconv"

	"github.com/jackc/pgx/v4"
)

var Conn *pgx.Conn

func DatabaseConnect() {
	databaseURL := "postgres://postgres:08091997@localhost:1997/new_project"


	
	var err error
	
	Conn, err = pgx.Connect(context.Background(), databaseURL)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("Successfully connect to database.")
}

// func GetDurationTime(StartDate time.Time, EndDate time.Time) string {
// 	diff := EndDate.Sub(StartDate)

// 	months := int64(diff.Hours() / 24 / 30)
// 	days := int64(diff.Hours() / 24)

// 	if days%30 >= 0 {
// 		days = days % 30
// 	}

// 	var duration string
// 	if months >= 1 && days >= 1 {
// 		duration = strconv.FormatInt(months, 10) + " month " + strconv.FormatInt(days, 10) + " days"
// 	} else if months >= 1 && days <= 0 {
// 		duration = strconv.FormatInt(months, 10) + " month"
// 	} else if months < 1 && days >= 0 {
// 		duration = strconv.FormatInt(days, 10) + " days"
// 	} else {
// 		duration = "0 days"
// 	}
// 	return duration
// }
